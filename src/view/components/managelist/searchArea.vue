<template>
  <div class="searchArea-con">
    <div class="AreaCon">
      <Form :model="formItem" :label-width="80" inline>
        <FormItem label="Input">
          <Input
            v-model="formItem.input"
            placeholder="Enter something..."
          ></Input>
        </FormItem>
        <FormItem label="Select">
          <Select v-model="formItem.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formItem: {
        input: "",
        select: "",
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.searchArea-con {
  background-color: #f2f3f5;

  .AreaCon {
  }
}
</style>