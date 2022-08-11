
/*Basic Liquid Combustion Generator*/
const basicLiquidCombustionGenerator = extendContent(SingleTypeGenerator, "ww", {
		getLiquidEfficiency(liquid){
		return 1.0;
	},
		getItemEfficiency(item){
		return 0.0;
	},
	draw(tile){
		var entity = tile.ent();
		Draw.rect(Core.atlas.find(this.name), tile.drawx(), tile.drawy());
		Draw.color("ff9b59");
		Draw.alpha(entity.heat * 0.4 + Mathf.absin(Time.time(), 8, 0.6) * entity.heat);
		Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
		Draw.reset();
	}
});

