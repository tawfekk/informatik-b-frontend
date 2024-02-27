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
export const PrintersCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" validate={[required()]} />
      <TextInput source="colour" />
      <TextInput source="type" />
      <TextInput source="price" />
    </SimpleForm>
  </Create>
);

export const PrintersList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="colour" />
      <TextField source="type" />
      <TextField source="price" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PrintersEdit = () => (
  <Edit>
    <SimpleForm>
    <TextInput source="id" validate={[required()]} />
      <TextInput source="colour" />
      <TextInput source="type" />
      <TextInput source="price" />
    </SimpleForm>
  </Edit>
);
