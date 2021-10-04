<template>
    <table class="customList w-100">
        <tr v-if="showHeader">
            <th v-for="headerItem in header" :key="headerItem">
                {{headerItem}}
            </th>
        </tr>

        <tr v-for="(row, rowIndex) in rows" :key ="rowIndex" @click="rowClick(row)" :class="{'pointer':rowClick != null}">
            <td v-for="(rowKey, rowKeyIndex) in rowKeys" :key="rowKeyIndex" :class="rowKey.classes" v-html="rowContent(row, rowKey)"></td>
        </tr>

    </table>
</template>

<script>
export default {
    name: 'customList',
    props: {
        header: {
            type: Array
        },
        rows: {
            type: Array
        },
        rowKeys: {
            type: Array
        },
        rowClick: {
            type: Function,
            default: null
        }
    },
    data: function() {
        return {
        }
    },
    computed: {
        showHeader: function() {
            return (this.header && this.header.length > 0) ? true : false
        }
    },
    methods:{
        pullDataFromRow: function(row, key) {
            if(key.includes('.')){
                var arr = key.split(".");
                while(arr.length && (row = row[arr.shift()]));
                return row;
            }
            return row[key]
        },
        rowContent: function (row, rowKey){
            let output = '';
            if(rowKey.avatar && rowKey.avatar == true){
                output += this.renderAvatar(row, rowKey)    
            }
            output += this.pullDataFromRow(row, rowKey.key)
            return output
        },
        renderAvatar: function (row, rowKey) {
            if(rowKey.avatarType == 'firstLetter'){
                return `<span class="avatar firstLetter" style="background-color:${row.color}; color:${row.colorContrast}">${this.pullDataFromRow(row, rowKey.key)[0]}</span>`
            } else {
                return 'a'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
table.customList{
    background-color: #FFF;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(149,149,149,0.27); 
    box-shadow: 0px 0px 15px 0px rgba(149,149,149,0.27);

    tr{

        border-bottom: 1px solid #ebeff2;
        th,td{
            padding: 19px 30px;
        }
    }
}
</style>

<style lang="scss">
.avatar.firstLetter{
    border-radius: 50%;
    width: 1.5em;
    display: inline-block;
    height: 1.5em;
    text-align: center;
    margin-right: 0.5em;
    padding-top: 2px;
}
</style>