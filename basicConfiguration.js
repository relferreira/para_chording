module.exports = {
  title: "para_chording v0.6 beta",
  rules: [
    {
      description: "QWE turns chording on / off",
      manipulators: [
        {
          conditions: [
            {
              name: "chording_mode",
              type: "variable_if",
              value: 0,
            },
          ],
          from: {
            modifiers: {
              optional: ["any"],
            },
            simultaneous: [
              {
                key_code: "q",
              },
              {
                key_code: "w",
              },
              {
                key_code: "e",
              },
            ],
          },
          to: [
            {
              set_variable: {
                name: "chording_mode",
                value: 1,
              },
            },
            {
              key_code: "page_up",
              modifiers: [
                "right_command",
                "right_control",
                "right_option",
                "right_shift",
              ],
            },
          ],
          type: "basic",
        },
        {
          conditions: [
            {
              name: "chording_mode",
              type: "variable_if",
              value: 1,
            },
          ],
          from: {
            modifiers: {
              optional: ["any"],
            },
            simultaneous: [
              {
                key_code: "q",
              },
              {
                key_code: "w",
              },
              {
                key_code: "e",
              },
            ],
          },
          to: [
            {
              set_variable: {
                name: "chording_mode",
                value: 0,
              },
            },
            {
              key_code: "page_down",
              modifiers: [
                "right_command",
                "right_control",
                "right_option",
                "right_shift",
              ],
            },
          ],
          type: "basic",
        },
      ],
    },
    {
      description: "para_chording ( clean install )",
      manipulators: [],
    },
  ],
};
