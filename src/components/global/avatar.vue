<template>
    <div>
        <img
            :class="avatarClasses"
            :style="{'height':height, 'width':width}"
            :src="image" 
        /> 
    </div>
</template>

<script>
export default {
    name: 'avatar',
    props: {
        image: {
            type: String
        },
        height: {
            type: String,
            default: '45px'
        },
        width: {
            type: String,
            default: '45px'
        },
        shape: {
            type: String,
            default: 'circle'
        }
    },
    data: function() {
        return {
            user: 'Fábio Garcia'
        }
    },
    computed: {
        avatarClasses: function() {
            let classes = [];
            classes.push(this.shape == 'circle' ? 'roundAvatar' : 'squareAvatar');
            return classes; 
        }
    }
}
</script>

<style lang="scss" scoped>
.roundAvatar{
    border-radius: 50%;
}

.squareAvatar{
    border-radius: 4px;
}
</style>