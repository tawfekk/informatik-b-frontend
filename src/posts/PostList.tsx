import {
    BooleanField,
    CreateButton,
    DatagridConfigurable,
    DateField,
    ExportButton,
    List,
    NumberField,
    ReferenceArrayField,
    SearchInput,
    SelectColumnsButton,
    TextField,
    TopToolbar,
} from 'react-admin';

function PostList() {
    return (
        <List
            sort={{ field: 'id', order: 'DESC' }}
            filters={[<SearchInput source="id" alwaysOn key="id" />]}
            actions={
                <TopToolbar>
                    <SelectColumnsButton />
                    <ExportButton />
                    <CreateButton />
                </TopToolbar>
            }
        >
            <DatagridConfigurable rowClick="edit">
            <TextField source="id" />
            <TextField source="speed" />
            <TextField source="ram" />
            <TextField source="hd" />
            <TextField source="rd" />
            <TextField source="price" />
            <TextField source="created_at" />
            </DatagridConfigurable>
        </List>
    );
}

export default PostList;
