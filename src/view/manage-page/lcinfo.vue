<template>
  <div class="lcinfo-container">
    <!-- 弹窗修改物料状态-成品/毛坯 -->
    <Modal v-model="modal1" title="修改状态" @on-ok="ok" @on-cancel="cancel">
      <p>
        状态：
        <RadioGroup v-model="border">
          <Radio label="毛坯" border></Radio>
          <Radio label="成品" border></Radio>
          <Radio label="半成品" border></Radio>
        </RadioGroup>
      </p>
    </Modal>

    <Tabs value="name1">
      <TabPane label="单元一" name="name1">
        <Row :gutter="32">
          <!-- 成品样例 -->
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>收纳罐中间轴</span>
                  <Button type="success" icon="md-create" @click="modal1 = true"
                    >成品</Button
                  >
                </p>
                <div class="kwimg">
                  <img src="../../assets/images/收纳罐中间轴毛胚.png" />
                </div>
              </div>
            </div>
          </Col>

          <!-- 毛坯样例 -->
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>印章</span>

                  <Button type="warning" icon="md-create" @click="modal1 = true"
                    >毛坯</Button
                  >
                </p>
                <div class="kwimg">
                  <img src="../../assets/images/印章成品.png" />
                </div>
              </div>
            </div>
          </Col>

          <!-- 空库位 -->
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>

          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row :gutter="32">
          <!-- 成品样例 -->
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>收纳罐中间轴</span>
                  <Button type="success" icon="md-create" @click="modal1 = true"
                    >成品</Button
                  >
                </p>
                <div class="kwimg">
                  <img src="../../assets/images/收纳罐中间轴毛胚.png" />
                </div>
              </div>
            </div>
          </Col>

          <!-- 毛坯样例 -->
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>印章</span>

                  <Button type="success" icon="md-create" @click="modal1 = true"
                    >成品</Button
                  >
                </p>
                <div class="kwimg">
                  <img src="../../assets/images/印章成品.png" />
                </div>
              </div>
            </div>
          </Col>

          <!-- 空库位 -->
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>

          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row :gutter="32">
          <!-- 成品样例 -->
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>收纳罐中间轴</span>
                  <Button type="success" icon="md-create" @click="modal1 = true"
                    >成品</Button
                  >
                </p>
                <div class="kwimg">
                  <img src="../../assets/images/收纳罐中间轴毛胚.png" />
                </div>
              </div>
            </div>
          </Col>

          <!-- 毛坯样例 -->
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>印章</span>

                  <Button type="success" icon="md-create" @click="modal1 = true"
                    >成品</Button
                  >
                </p>
                <div class="kwimg">
                  <img src="../../assets/images/印章成品.png" />
                </div>
              </div>
            </div>
          </Col>

          <!-- 空库位 -->
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>

          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row :gutter="32">
          <!-- 成品样例 -->
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>收纳罐中间轴</span>
                  <Button type="success" icon="md-create" @click="modal1 = true"
                    >成品</Button
                  >
                </p>
                <div class="kwimg">
                  <img src="../../assets/images/收纳罐中间轴毛胚.png" />
                </div>
              </div>
            </div>
          </Col>

          <!-- 毛坯样例 -->
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>印章</span>

                  <Button type="success" icon="md-create" @click="modal1 = true"
                    >成品</Button
                  >
                </p>
                <div class="kwimg">
                  <img src="../../assets/images/印章成品.png" />
                </div>
              </div>
            </div>
          </Col>

          <!-- 空库位 -->
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>

          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row :gutter="32">
          <!-- 成品样例 -->
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>收纳罐中间轴</span>
                  <Button type="success" icon="md-create" @click="modal1 = true"
                    >成品</Button
                  >
                </p>
                <div class="kwimg">
                  <img src="../../assets/images/收纳罐中间轴毛胚.png" />
                </div>
              </div>
            </div>
          </Col>

          <!-- 毛坯样例 -->
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>印章</span>

                  <Button type="success" icon="md-create" @click="modal1 = true"
                    >成品</Button
                  >
                </p>
                <div class="kwimg">
                  <img src="../../assets/images/印章成品.png" />
                </div>
              </div>
            </div>
          </Col>

          <!-- 空库位 -->
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>

          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>
          <Col span="4">
            <div class="kw-bg">
              <div class="kw-con">
                <p>
                  <span>空库位</span>

                  <!-- <Button type="success" icon="md-create"  @click="modal1 = true">成品</Button> -->
                </p>
                <div class="kwimg knoneimg">
                  <!-- <img src="../../assets/images/印章成品.png" /> -->
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </TabPane>

      <TabPane label="单元二" name="name2">单元二</TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  data() {
    return { modal1: false, border: "成品" };
  },
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
  },
};
</script>

<style lang="scss" scoped>
.lcinfo-container {
  // background: white;
  padding: 20px;
  border-radius: 10px;
  height: 100%;

  ::v-deep .ivu-tabs-nav .ivu-tabs-tab {
    font-size: 16px;
    font-weight: bold;
  }
  .ivu-row {
    margin-bottom: 10px;
  }
  .kw-bg .kw-con .knoneimg {
    background-image: url("../../assets/images/k2.png");
  }
  .kwimg {
    background-image: url("../../assets/images/k1.png");
    background-repeat: no-repeat;
    height: calc(100% - 42px);
    background-position: center 48px;
    background-size: 72%;
    text-align: center;
    padding-top: 16px;
  }
  .kwimg img {
    height: 68px;
  }
  .kw-con p {
    height: 42px;
    line-height: 42px;
    font-size: 16px;
    font-weight: bold;
    color: #444444;
    border-bottom: #d5d6da 1px solid;
    padding-left: 10px;
    padding-right: 4px;
    display: flex;
    align-items: center; /*垂直居中*/
    justify-content: space-between;
    .ivu-btn {
      height: 26px;
      line-height: 26px;
      font-size: 13px;
      padding: 0 6px;
    }
    ::v-deep .ivu-btn > .ivu-icon + span,
    ::v-deep .ivu-btn > span + .ivu-icon {
      margin-left: 0;
    }
  }
  .kw-bg {
    border: #d5d6da 1px solid;
    background: white;
  }
  .kw-bg,
  .kw-con {
    height: 202px;
  }
}
</style>