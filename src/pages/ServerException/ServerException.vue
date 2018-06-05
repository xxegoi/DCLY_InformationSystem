<template>
  <div className="server-exception-page">
        <BasicException />
      </div>
</template>

<script>
import BasicException from './components/BasicException';

export default {
  name: 'ServerException',
  components: {
    BasicException,
  },
};
</script>
