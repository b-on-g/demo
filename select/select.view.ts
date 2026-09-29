namespace $.$$ {
	export class $bog_demo_select_set extends $.$bog_demo_select_set {

		plugins() {
			return this.skinned() ? [ ... super.plugins(), this.Skin() ] : super.plugins()
		}

		@$mol_mem
		options() {
			return Object.fromEntries(
				Array.from( { length: 30 }, ( _, i )=> [ `o${ i }`, `Вариант ${ i + 1 }` ] )
			)
		}

	}
}
