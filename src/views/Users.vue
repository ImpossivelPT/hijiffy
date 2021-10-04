<template>
    <div class="users">
        
        <!-- Fitlers -->
        <div class="filters row align-items-center  ">
            <div class="col-sm-6">    
                <span>Company:  </span>
                <v-select 
                    class="inlineSelector" 
                    v-model="companySelectorSelected" 
                    :filterable="false" 
                    :searchable="false" 
                    :options="companiesAvailable" 
                    :clearable="false"
                    @input="companySelectorChanged($event)"
                ></v-select>
            </div>
            <div class="col-sm-6 d-flex justify-content-end">
                <click-button label="Add contact" />
            </div> 
        </div>

        <!-- List -->
        <div class="listWrapper row">
            <div class="col-sm-12">
                <custom-list :header="list.header" :rows="contacts" :rowKeys="list.rowKeys" :rowClick="list.clickAction"/>
            </div>
        </div>
        <!-- Pagination -->
        <div class="pagintation row">
            <div class="col-sm-12 d-flex justify-content-center align-items-center">
                
                <pagination 
                    v-if="itemsPerPage && currentPage && totalContacts"
                    :currentPage="currentPage" 
                    :totalItems="totalContacts" 
                    :itemsPerPage="itemsPerPage"
                    @nextPage="nextPage()"
                    @previousPage="previousPage()"
                    @goToPage="goToPage($event)"
                />
                
                <div class="filterShow">
                    Show: <v-select class="inlineSelector" :filterable="false" :searchable="false" :options="itemsPerPageOptions" v-model="itemsPerPageSelected" :clearable="false"></v-select>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import clickButton from '@/components/global/clickButton'
import customList from '@/components/global/customList'
import pagination from '@/components/global/pagination'
import contactTimeTable from '@/components/contact/timeTable'
export default {
    name: 'Users',
    components:{
        clickButton,
        customList,
        pagination
    },
    data: function () {
        return {
            currentPage: 1,
            companySelectorSelected: 'all',
            itemsPerPageOptions:[
                {
                    id: 1,
                    label:'8 per page',
                    count: 8
                },
                {
                    id: 2,
                    label:'10 per page',
                    count: 10
                },
                {
                    id: 3,
                    label:'12 per page',
                    count: 12
                },
            ],
            itemsPerPageSelected:{
                id: 1,
                label:'8 per page',
                count: 8
            },
            list:{
                header:[
                    'Name',
                    'Email',
                    'Company Name',
                    'Role',
                    'Recent activity'
                ],
                rowKeys:[
                    {
                        key: 'name',
                        avatar: true,
                        avatarType: 'firstLetter',
                        classes: 'bold',
                    },
                    {
                        key: 'email'
                    },
                    {
                        key: 'company.name'
                    },
                    {
                        key: 'company.role'
                    },
                    {
                        key: 'lastActivity'
                    }
                ],
                clickAction: this.rowClick
            }
        }
    },
    computed: {
        ...mapGetters([
            'getContacts',
            'getContactsCount',
            'getContactsCompanies',
            'getContactsFiltered'
        ]),
        filteredContacts: function () {
            return this.getContactsFiltered(this.companySelectorSelected)
        },
        companiesAvailable: function () {
            let arrayCompanies = this.getContactsCompanies
            if(!arrayCompanies.includes('all')){
                arrayCompanies.unshift('all')
            }
            return arrayCompanies
        },
        contacts: function () {
            return this.getContacts(this.itemsPerPage, this.currentPage, this.companySelectorSelected)
        },
        itemsPerPage: function () {
            return this.itemsPerPageSelected.count
        },
        totalContacts: function () {
            return this.getContactsCount(this.companySelectorSelected)
        }
    },
    methods:{
        ...mapActions([
           'openPopup'
        ]),
        companySelectorChanged: function ($event){
            console.log('companySelectorChanged',$event)
            //reset page
            this.currentPage = 1
        },
        rowClick: function(row) {
            this.openPopup({
                title: row.name,
                bodyComponent: contactTimeTable
            });
        },
        nextPage: function() {
            this.currentPage++
        },
        previousPage: function() {
            this.currentPage--
        },
        goToPage: function($event) {
            console.log($event)
            this.currentPage = $event
        },
    }
}
</script>

<style lang="scss" scoped>
.users{
    margin: 0 50px;

    .filters{
        margin-top: 35px;
        margin-bottom: 24px;
    }

    .pagintation{
        margin-top: 35px;
        margin-bottom: 24px;
    }

    .filterShow{
        margin-left: 10px;
    }
}
</style>

<style lang="scss">
// we should override this properly
.inlineSelector{
    display: inline-block;

    .vs__dropdown-toggle{
        border: none;
    }

    &.vs--single.vs--open .vs__selected, .vs__selected{
        color: #109cf1;
        position: initial;
        opacity: 1;
    }

    .v-select__selection--comma {
        text-overflow: unset;
    }
}

</style>