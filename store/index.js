
	import Vuex from 'vuex';

	const createStore = () => {
		return new Vuex.Store({
			state: {
				brews: [
                    {
                        'name' : 'Golden Meadow',
                        'short_description' : 'German Inspired Lager',
                        'description' : `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus nulla ac viverra congue. Maecenas vulputate erat ipsum, in eleifend risus sodales non.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus nulla ac viverra congue. Maecenas vulputate erat ipsum, in eleifend risus sodales non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus nulla ac viverra congue. Maecenas vulputate erat ipsum, in eleifend risus sodales non.</p>`,
                        'image_url' : 'http://via.placeholder.com/280x420.png?text=Golden+Meadow',
                        'showcase_active' : true
                    },
                    {
                        'name' : 'Mountain Dusk',
                        'short_description' : 'Japanese Inspired Lager',
                        'description' : `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus nulla ac viverra congue. Maecenas vulputate erat ipsum, in eleifend risus sodales non.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus nulla ac viverra congue. Maecenas vulputate erat ipsum.</p>`,
                        'image_url' : 'http://via.placeholder.com/280x420.png?text=Mountain+Dusk',
                        'showcase_active' : false
                    }
                ]
			},
			mutations: {
				set_brews ( state, brews ) {
					state.brews = brews;
				} 
			},
			actions: {
				set_brews ( context, brews ) {
					context.commit( 'set_brews', brews )
				}
			},
			getters: {
				get_brews ( state ) {
					return state.brews;
				}
			}
		})
	}

	export default createStore;