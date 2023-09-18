import linkifyElement from "linkify-element";

export default {
  props: {
    linkOptions: {
      type: Object,
      required: true
    }
  },
  mounted() {
  	if(this.$refs['message-content']){
    	linkifyElement(this.$refs['message-content'], this.linkOptions, document)
  	}
  },
}