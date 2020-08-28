export default (context, inject) => {
    const editStr = function( str ) {

        return `edited ${str}`;
    }

    inject('editStr', editStr)
}