import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import RiffleActions from './RiffleActions';
import { formatDateForDisplay } from '../../utils/generic/transformDates';


const RiffleTable = ({ rows, pageSize, setPageSize, loading, onEdit, onDelete }) => {
  const { t } = useTranslation();

  const localeText = {
    columnMenuSortAsc: t('sort_asc'),
    columnMenuSortDesc: t('sort_desc'),
    columnMenuFilter: t('filter'),
    columnMenuHideColumn: t('hide_column'),
    columnMenuManageColumns: t('manage_columns'),
    noRowsLabel: t('no_rows'),
    MuiTablePagination: {
      labelRowsPerPage: t('rows_per_page'),
    },
  };

  const columns = [
    { field: 'name', headerName: t('name'), flex: 1 },
    { field: 'description', headerName: t('description'), flex: 1 },
    { field: 'initDate', headerName: t('initDate'), flex: 1 },
    { field: 'endtDate', headerName: t('endDate'), flex: 1 },
    {
      field: 'actions',
      headerName: t('actions'),
      renderCell: (params) => (
        <RiffleActions
          riffleId={params.row.id}
          onEdit={() => onEdit(params.row)}
          onDelete={onDelete}
        />
      ),
      flex: 1,
      sortable: false,
      filterable: false,
    },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        pageSizeOptions={[5, 10, 20, 50]}
        localeText={localeText}
        loading={loading}
        disableRowSelectionOnClick
        components={{ Toolbar: GridToolbar }}
        initialState={{
          pagination: {
            paginationModel: { pageSize },
          },
        }}
      />
    </Box>
  );
};

RiffleTable.propTypes = {
  rows: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  setPageSize: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default RiffleTable;