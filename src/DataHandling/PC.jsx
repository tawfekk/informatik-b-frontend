import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  SelectInput,
  TabbedShowLayout,
  Tab,
  Edit,
  EditButton,
  ReferenceManyField,
  Show,
  SimpleShowLayout,
  List,
  Datagrid,
  TextField,
  SelectField,
  required,
  ShowButton
} from "react-admin";
export const PcCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" validate={[required()]} />
      <TextInput source="speed" />
      <TextInput source="ram" />
      <TextInput source="hd" />
      <TextInput source="rd" />
      <TextInput source="price" />
    </SimpleForm>
  </Create>
);

export const PcList = () => (
  <List>
    <Datagrid>
      <TextField source="id" name="model" />
      <TextField source="speed" />
      <TextField source="ram" />
      <TextField source="hd" />
      <TextField source="rd" />
      <TextField source="price" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PcEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput type="number" source="id" name="model" validate={required()} />
      <TextInput type="number" source="speed"  />
      <TextInput type="number" source="ram" />
      <TextInput type="number" source="hd" />
      <TextInput source="rd"/>
      <TextInput type="number" source="price"/>
    </SimpleForm>
  </Edit>
);
