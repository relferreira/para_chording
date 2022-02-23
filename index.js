const fs = require("fs");
const karabinerJson = require("./basicConfiguration");

function shiftVariation(baseConfig) {
  let newShiftVariation = JSON.parse(JSON.stringify(baseConfig));
  newShiftVariation.from.modifiers = {
    mandatory: "shift",
    optional: "any",
  };
  newShiftVariation.to[0].modifiers = "left_shift";
  return newShiftVariation;
}

function getKey(key) {
  let keyboardLetter = key[0].toLowerCase();
  let shortcut = {
    key_code: keyboardLetter,
  };

  if (key != keyboardLetter) shortcut.modifiers = "left_shift";
  return shortcut;
}

async function main() {
  let files = await fs.promises.readdir("./files");
  for (let file of files) {
    let content = await fs.promises.readFile(`./files/${file}`, "utf-8");
    let result = content
      .replace(/\/\/.*/g, "")
      .replace(/^\s*[\r\n]/gm, "")
      .split("\n")
      .filter(Boolean);

    if (!result || result.length === 0) continue;

    let customRules = karabinerJson.rules[1];
    customRules.manipulators = result.flatMap((rule) => {
      let baseConfig = {
        conditions: [
          {
            name: "chording_mode",
            type: "variable_if",
            value: 1,
          },
        ],
        type: "basic",
        from: {
          simultaneous: [],
          simultaneous_options: {
            detect_key_down_uninterruptedly: false,
            key_down_order: "insensitive",
            key_up_order: "insensitive",
            key_up_when: "any",
          },
        },
        to: [],
      };

      let [from, to] = rule.split(",");

      baseConfig.from.simultaneous = from.split("").map(getKey);

      baseConfig.to = to.split("").map(getKey);

      return [baseConfig, shiftVariation(baseConfig)];
    });

    await fs.promises.writeFile(
      "./build/para_chording.json",
      JSON.stringify(karabinerJson, null, 2)
    );
  }
}

main();
