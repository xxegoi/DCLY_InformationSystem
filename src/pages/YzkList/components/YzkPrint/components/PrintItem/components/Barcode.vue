<template>
    <svg :id="getID()" class="vue-barcode-element"></svg>
</template>

<script>
    import barcode from 'jsbarcode'

    export default {
        components: {
            barcode,
        },
        props: {
            value: [String, Number],
        },
        mounted() {
            console.log("bar:" + this.value);
            let id = "#" + "gh" +this.value;
            console.log("id:" + id);
            JsBarcode(id, this.value, {
                format: "CODE128",
                width: 2,
                height: 30,
                margin: 0,
                displayValue: "false",
            });
        },
        methods: {
            getID() {
                return "gh" + this.value;
            }
        },
    }
</script>

<style scoped>
</style>