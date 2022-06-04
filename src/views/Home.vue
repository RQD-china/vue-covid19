<template>
  <div class="home">
    <Header />
    <Info :infoData="infoData" />
    <CaseNum :caseNumData="caseNumData" />
    <Map />
    <TreeChart />
    <News :newsData="newsData" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Info from "../components/Info";
import CaseNum from "../components/CaseNum";
import Map from "../components/Map";
import TreeChart from "../components/TreeChart";
import News from "../components/News";
import Footer from "../components/Footer";

export default {
  name: "Home",
  data() {
    return {
      infoData: {},
      caseNumData: {},
      newsData: [],
    };
  },
  created() {
    this.$api
      .getDataInfo({
        key: "d7c335f2e7856ec48c1962a99fcc6f98",
      })
      .then((res) => {
        this.newsData = res.newslist[0].news;
        this.infoData = {
          note1: res.newslist[0].desc.note1,
          note2: res.newslist[0].desc.note2,
          note3: res.newslist[0].desc.note3,
          remark1: res.newslist[0].desc.remark1,
          remark2: res.newslist[0].desc.remark2,
          remark3: res.newslist[0].desc.remark3,
        };
        this.caseNumData = {
          modifyTime: res.newslist[0].desc.modifyTime,
          currentConfirmedCount: res.newslist[0].desc.currentConfirmedCount,
          suspectedCount: res.newslist[0].desc.suspectedCount,
          seriousCount: res.newslist[0].desc.seriousCount,
          confirmedCount: res.newslist[0].desc.confirmedCount,
          deadCount: res.newslist[0].desc.deadCount,
          curedCount: res.newslist[0].desc.curedCount,
          currentConfirmedIncr: res.newslist[0].desc.currentConfirmedIncr, // 现存确诊
          suspectedIncr: res.newslist[0].desc.suspectedIncr, // 现存疑似
          seriousIncr: res.newslist[0].desc.seriousIncr,
          confirmedIncr: res.newslist[0].desc.confirmedIncr,
          deadIncr: res.newslist[0].desc.deadIncr,
          curedIncr: res.newslist[0].desc.curedIncr,
        };
      });
  },
  components: {
    Header,
    Info,
    CaseNum,
    Map,
    TreeChart,
    News,
    Footer,
  },
};
</script>
