export type RecipeType = {
  name: string;
  thumbnail: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  ingredients: string;
  methods: string;

}