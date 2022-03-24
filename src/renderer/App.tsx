import { useEffect, useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '@elastic/eui/dist/eui_theme_dark.css';

import {
  EuiBasicTable,
  EuiButton,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiForm,
  EuiFormRow,
  EuiHeader,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiHeaderSectionItem,
  EuiProvider,
  EuiSpacer,
  EuiComboBox,
} from '@elastic/eui';

import './App.css';
import logoImage from '../../assets/logo.png';
import { EuiPageTemplate } from '@elastic/eui';
import { keyNames } from 'main/keys';

declare global {
  interface Window {
    electron: {
      store: {
        get: () => any;
        set: (key: string, val: any) => void;
        clear: () => any;
        remove: (key: string) => void;
      };
    };
  }
}

const Hello = () => {
  const [_, setShortcut] = useState('');
  const [value, setValue] = useState('');
  const [storedShortcuts, setStoredShortcuts] = useState([]);

  const [render, setRender] = useState(new Date());
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [selectedOptions, setSelected] = useState([]);

  useEffect(() => {
    async function getValues() {
      console.log(window.electron.store.get());
      setStoredShortcuts(window.electron.store.get());
    }

    getValues();
  }, [render]);

  return (
    <div>
      <EuiForm
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          window.electron.store.set(
            selectedOptions.map((option: any) => option.label).join('+'),
            value
          );
          setShortcut('');
          setValue('');
          setSelected([]);
          setRender(new Date());
        }}
      >
        <EuiFlexGroup gutterSize="s">
          <EuiFlexItem />
          <EuiFlexItem>
            <EuiFormRow>
              <EuiComboBox
                aria-label="Accessible screen reader label"
                placeholder="Shortcut"
                options={Object.keys(keyNames).map((key) => ({
                  label: key,
                }))}
                selectedOptions={selectedOptions}
                onChange={(options) => setSelected(options as any)}
                isClearable={true}
              />
            </EuiFormRow>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFormRow>
              <EuiFieldText
                name="value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Value"
              />
            </EuiFormRow>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFormRow>
              <EuiButton type="submit" onClick={() => {}} iconType="plus">
                add
              </EuiButton>
            </EuiFormRow>
          </EuiFlexItem>
          {/* <EuiFlexItem grow={false}>
            <EuiFormRow>
              <EuiButton
                type="submit"
                onClick={() => {}}
                iconType="plus"
              ></EuiButton>
            </EuiFormRow>
          </EuiFlexItem> */}

          {selectedItems.length > 0 && (
            <EuiFlexItem grow={false}>
              <EuiFormRow>
                <EuiButton
                  color="danger"
                  type="button"
                  iconType="trash"
                  onClick={() => {
                    for (let selectedItem of selectedItems)
                      window.electron.store.remove(selectedItem.shortcut);
                    setRender(new Date());
                  }}
                >
                  Delete {selectedItems.length}
                </EuiButton>
              </EuiFormRow>
            </EuiFlexItem>
          )}
        </EuiFlexGroup>
      </EuiForm>
      <EuiSpacer size="l" />
      <EuiBasicTable
        tableCaption="Demo of EuiBasicTable"
        items={storedShortcuts}
        rowHeader="shortcut"
        itemId="shortcut"
        columns={[
          { field: 'shortcut', name: 'Shortcut' },
          { field: 'value', name: 'Value' },
        ]}
        compressed={false}
        isSelectable={true}
        selection={{
          onSelectionChange: (selectedItems) => setSelectedItems(selectedItems),
          initialSelected: selectedItems,
        }}
      />
    </div>
  );
};

export default function App() {
  return (
    <EuiProvider colorMode="dark">
      <EuiHeader>
        {/* <EuiCollapsibleNav
          size={240}
          button={
            <EuiButton onClick={() => setNavIsOpen(!navIsOpen)}>
              Toggle nav
            </EuiButton>
          }
          isOpen={navIsOpen}
          onClose={() => setNavIsOpen(false)}
        /> */}
        <EuiHeaderSectionItem border="right">
          <img src={logoImage} style={{ width: '24px', marginLeft: '16px' }} />
        </EuiHeaderSectionItem>

        <EuiHeaderSectionItem>
          <EuiHeaderLinks aria-label="App navigation links example">
            <EuiHeaderLink isActive>Docs</EuiHeaderLink>
          </EuiHeaderLinks>
        </EuiHeaderSectionItem>
      </EuiHeader>

      <EuiPageTemplate template="centeredBody" paddingSize="l">
        <Router>
          <Routes>
            <Route path="/" element={<Hello />} />
          </Routes>
        </Router>
      </EuiPageTemplate>
    </EuiProvider>
  );
}
