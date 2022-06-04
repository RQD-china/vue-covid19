<template>
    <div>
        <div id="city"></div>
    </div>
</template>

<script>
export default {
    name: "City",
    data() {
        return {
            cityData:[]
        };
    },
    mounted() {
        const currentCity = this.$route.params.city;
        this.$api.getCaseNum({
                key: "d7c335f2e7856ec48c1962a99fcc6f98"
            })
            .then(res => {
                for (var i = 0; i < res.newslist.length; i++) {
                    if(currentCity == res.newslist[i].provinceShortName){
                        for(var j = 0;j<res.newslist[i].cities.length;j++){
                            if(res.newslist[i].provinceShortName !== "北京"){
                                var temp = {
                                    name:res.newslist[i].cities[j].cityName +"市", // 市  区  旗  州
                                    value:res.newslist[i].cities[j].currentConfirmedCount,
                                    itemStyle: {
                                        normal: {
                                            areaColor: this.setColor(
                                                res.newslist[i].cities[j].currentConfirmedCount
                                            )
                                        }
                                    }
                                }
                            }else{
                                var temp = {
                                    // 藏族自治州  藏族自治州市NaN
                                    name:res.newslist[i].cities[j].cityName, // 市  区  旗  州
                                    value:res.newslist[i].cities[j].currentConfirmedCount,
                                    itemStyle: {
                                        normal: {
                                            areaColor: this.setColor(
                                                res.newslist[i].cities[j].currentConfirmedCount
                                            )
                                        }
                                    }
                                }
                            }
                            this.cityData.push(temp)
                        }
                    }
                }
                this.$charts.provinceCity("city",currentCity,this.cityData);
            });
    },
    methods: {
        setColor(value) {
            let currentColor = "";
            switch (true) {
                case value == 0:
                    currentColor = "#fff";
                    break;
                case value > 0 && value < 10:
                    currentColor = "#FDFDCF";
                    break;
                case value >= 10 && value < 100:
                    currentColor = "#FE9E83";
                    break;
                case value >= 100 && value < 500:
                    currentColor = "#E55A4E";
                    break;
                case value >= 500 && value < 10000:
                    currentColor = "#4F070D";
                    break;
            }
            return currentColor;
        }
    }
};
</script>

<style scoped>
#city {
    width: 100%;
    height: 400px;
}
</style>