import Route from '@ember/routing/route';
import EmberObject,{get,set} from '@ember/object';

export default Route.extend({
	model(){
		return {copy:{}};
	},
	actions:{
		save(model){
			let copy=model.copy;
			this.store.createRecord('project',EmberObject.create(copy));
			dev.save();
		}
	}
});
