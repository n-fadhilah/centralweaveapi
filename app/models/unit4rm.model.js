module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      block: String,
      floor: String,
      unit: String,
      price: String,
      unitnum: String,
      isavailable: Boolean,
    },
    { timestamps: true, isavailable: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Unit = mongoose.model("unit4rm", schema);
  return Unit;
};
