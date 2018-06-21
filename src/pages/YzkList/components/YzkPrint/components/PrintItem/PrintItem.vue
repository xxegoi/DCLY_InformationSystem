<template>
  <div class="main">
    <div id="header">
      <!-- <el-row>
        <el-col :span="6" :offset="1">
          <div style="padding:25px;">
            这里放图片LOGO
          </div>
        </el-col>
        <el-col :span="7" :offset="1">
          <h4>【订单】 生 产 运 转 卡</h4>
        </el-col>
        <el-col :span="5" :offset="2">
          <VueBarcode style="width:150px;height:50px;" value="DY-WL-001" :options="{ displayValue: false }"></VueBarcode>
        </el-col>
      </el-row> -->

      <el-row>
        <el-col :span="6" :offset="17">
          <!-- <barcode :value="getGH()" width="2" height="30" margin="0" display-value="false"></barcode> -->
          <!-- <svg class="111"></svg> -->
          <bar :value="getGH()"></bar>
        </el-col>
      </el-row>

      <el-row class="cansee">
        <el-col :span="8" :offset="1">
          开单日期
          <span style="font-size:20px;">{{year}}</span>年&nbsp
          <span style="font-size:20px;">{{month}}</span>月&nbsp
          <span style="font-size:20px;">{{day}}</span>日
        </el-col>
        <el-col :span="8">
          约定货期
          <span style="font-size:20px;"></span>年&nbsp
          <span style="font-size:20px;"></span>月&nbsp
          <span style="font-size:20px;"></span>日
        </el-col>
        <el-col :span="6" :offset="1">
          缸号：
          <span style="font-size:15px;">{{printData.gh}}</span>
        </el-col>
      </el-row>

    </div>
    <div id="body" class="cansee">
      <!---->
      <el-row>
        <el-col :span="9">
          <el-row>
            <el-col :span="4" class="rowCell">客户</el-col>
            <el-col :span="14" class="rowInputCell">
              <span style="font-size:20px;">{{printData.customerName}}</span>
            </el-col>
            <el-col :span="6" class="rowCell">订单号</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="rowCell">布类</el-col>
            <el-col :span="20" class="rowInputCell">
              <span style="font-size:12px;">{{printData.itemName}}</span>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="7">
          <el-row>
            <el-col :span="18" class="rowInputCell">
              <span style="font-size:20px;">{{printData.orderNo}}</span>
            </el-col>
            <el-col :span="6" class="rowCell">款号</el-col>
          </el-row>
          <el-row>
            <el-col :span="9" class="rowCell">颜色/色号</el-col>
            <el-col :span="15" class="rowInputCell">
              <span style="font-size:12px;">{{printData.itemModel}}</span>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="8">
          <el-row>
            <el-col :span="12" class="rowInputCell">
              <span></span>
            </el-col>
            <el-col :span="6" class="rowCell">染机号</el-col>
            <el-col :span="6" class="rowInputCell">
              <span></span>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="6" class="rowCell">开单人</el-col>
            <el-col :span="6" class="rowInputCell">
              <span style="font-size:20px;">{{printData.biller}}</span>
            </el-col>
            <el-col :span="6" class="rowCell">审核</el-col>
            <el-col :span="6" class="rowInputCell">
              <span style="font-size:20px;">{{printData.checker}}</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!---->
      <el-row>
        <el-col :span="1" id="dsyq">对色要求</el-col>
        <el-col :span="14">
          <el-row>
            <el-col :span="11" class="rowCell">色对光源:</el-col>
            <el-col :span="13" class="rowCell">色对:
              <span></span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="rowCell">后整加工:
              <span></span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="9">
          <el-row>
            <el-col :span="8" class="rowCell">配布 备注</el-col>
            <el-col :span="16" style="font-size:12px;" class="rowInputCell">
              <span>{{printData.pbNote}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" class="rowCell">匹数/重量</el-col>
            <el-col :span="16" style="font-size:20px;" class="rowCell">&nbsp&nbsp
              <span style="font-size:15px;">{{printData.qty}}</span>匹&nbsp
              <span style="font-size:15px;">{{printData.weight}}</span>KG</el-col>
          </el-row>
        </el-col>
      </el-row>

      <!---->
      <el-row>
        <el-col :span="15">
          <el-row>
            <el-col :span="2" id="wxyq">物性要求</el-col>
            <el-col :span="22">
              <el-row>
                <el-col class="rowCell">手感要求:
                  <span style="font-size:15px;">{{printData.fsg}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col class="rowCell">成品要求:
                  <span style="font-size:15px;">{{printData.dxfk}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col class="rowCell">下机克重:&nbsp&nbsp
                  <span></span> g/㎡成品克重:&nbsp&nbsp&nbsp
                  <span style="font-size:15px;">{{printData.fkz}}</span>g/㎡</el-col>
              </el-row>
              <el-row>
                <el-col :span="2" id="ldyq">牢度要求</el-col>
                <el-col :span="22" id="ldyqInput">
                  <span></span>
                </el-col>
              </el-row>
              <el-row>
                <el-col class="rowCell">缩水率要求:
                  <span></span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24" id="scgylc">生产工艺流程:
              <br/>
              <br/>
              <br/>
              <span style="font-size:20px;">{{flow}}</span>
              <br/>
              <br/>
              &nbsp&nbsp<span><bar :value="getGH()"></bar></span>
              <br/>
            </el-col>
          </el-row>
        </el-col>


        <el-col :span="9">
          <el-row>
            <el-col class="rowCell">包装要求:纸筒:
              <span style="font-size:20px;">{{printData.fzt}}</span>加重:
              <span style="font-size:20px;">{{printData.fjz}}</span>胶袋:
              <span style="font-size:20px;">{{printData.fjd}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col id="bz">
              备注:
              <br/>
              <br/>
              <span style="font-size:15px;">{{printData.note}}</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import jsbarcode from 'jsbarcode'
  import bar from "./components/Barcode"

  export default {
    components: {
      jsbarcode,
      bar,
    },
    data() {
      return {
        year: null,
        month: null,
        day: null,
        flow: '',
      }
    },
    methods: {
      getGH() {
        return this.printData.gh;
      }
    },
    props: {
      printData: {
        required: true,
        type: Object,
      }
    },
    watch: {
      printData: {
        handler(val, oldval) {

          this.batchNo = this.printData.gh;
        },
        immediate: true,
        deep: true
      }
    },
    created() {

    },
    mounted() {
      let tempDate = this.printData.date.replace(/-/g, "/").replace('T', ' ');
      let date = new Date(tempDate);

      this.year = date.getFullYear();
      this.month = date.getMonth();
      this.day = date.getDay();

      this.$axios({
          url: "/api/WorkFlow/GetWorkFlow",
          params: {
            fgh: this.printData.gh
          }
        })
        .then(res => {

          this.flow = '';

          for (let i = 0; i < res.data.Data.WorkFlow.length; i++) {
            if (i == 0) {
              this.flow += res.data.Data.WorkFlow[i].FName;
            } else {
              this.flow += '-' + res.data.Data.WorkFlow[i].FName;
            }
          }
        })
        .catch(res => {
          console.log(res);
          this.$message.error("Faild");
        });
    },

  }
</script>

<style scoped>
  @media print {
    .main {
      page-break-after: always;
    }
  }

  .cansee {
    visibility: hidden;
  }

  span {
    font-weight: 100;
    font-size: 8px;
    visibility: visible;
  }

  .main {
    height: 1100px; /******1120********/
    width: 793px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 75px;
    font-family: SimSun;
    /* border-style: solid;
    border-width: 1px; */
    /* margin-bottom: 5px; */
  }

  #header {
    /* height: 150px;
    width: 210mm; */
    margin-left: auto;
    margin-right: auto;
  }

  #body {
    border-style: solid;
    border-width: 1px;
    /* margin-top:-1px;
    margin-right:-1px;
    margin-left: -1px;
    margin-bottom: -1px; */
  }

  .rowCell {
    border-style: solid;
    border-width: 1px;
    padding: 5px;
    height: 30px;
    font-weight: bold;
  }

  .rowInputCell {
    border-style: solid;
    border-width: 1px;
    height: 30px;
    overflow: hidden;
    white-space: nowrap;
  }

  .cellstyle1 {
    text-align: center;
    vertical-align: middle;
    /* padding: 2px; */
    border-style: solid;
    border-width: 1px;
    border-collapse: collapse;
    /* margin-top:-1px;
    margin-right:-1px;
    margin-left: -1px;
    margin-bottom: -1px; */
  }

  .cellstyle2 {
    text-align: left;
    vertical-align: middle;
    padding: 2px;
    border-style: solid;
    border-width: 1px;
    /* margin-top:-1px;
    margin-right:-1px;
    margin-left: -1px;
    margin-bottom: -1px; */
  }

  /* .el-col {
    border-style: solid;
    border-width: 1px;
    border-collapse: collapse;
  } */

  #dsyq {
    height: 60px;
    text-align: center;
    vertical-align: middle;
    padding: 18px 0 18px 0;
    border-style: solid;
    border-width: 1px;
    font-weight: bold;
    font-size: 10px;
  }

  #wxyq {
    height: 200px;
    text-align: center;
    padding: 71px 0 71px 0;
    border-style: solid;
    border-width: 1px;
    font-weight: bold;
  }

  #ldyq {
    height: 80px;
    text-align: center;
    padding: 5px;
    border-style: solid;
    border-width: 1px;
    font-weight: bold;
  }

  #ldyqInput {
    height: 80px;
    text-align: left;
    padding: 30px;
    border-style: solid;
    border-width: 1px;
  }

  #scgylc {
    height: 100px;
    width: 450px;
    text-align: left;
    border-style: solid;
    border-width: 1px;
    font-weight: bold;
  }

  #bz {
    height: 270px;
    text-align: left;
    border-style: solid;
    border-width: 1px;
    font-weight: bold;
  }
</style>