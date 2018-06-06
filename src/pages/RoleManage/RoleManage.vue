<template>
  <div className="role-manage-page">
        <RoleQuery />
        <RoleTable />
      </div>
</template>

<script>
import RoleQuery from './components/RoleQuery';
import RoleTable from './components/RoleTable';

export default {
  name: 'RoleManage',
  components: {
    RoleQuery,
    RoleTable,
  },
};
</script>
