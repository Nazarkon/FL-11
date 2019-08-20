  function create(proto, propertiesObject) {
      if (typeof proto !== 'object' && typeof proto !== 'function') {
          throw new TypeError('Object prototype may only be an Object: ' + proto);
      } else if (proto === null) {
          throw new Error("Doesn't support 'null' as the first arguments.");
      }

      if (typeof propertiesObject !== 'undefined') {
          throw new Error("This browser's doesn't support a second argument.");
      }

      function F() {
          return
      }
      F.prototype = proto;

      return new F();
  }

  const obj1 = {
      prop: 5
  };
  const obj2 = create(obj1);

  Object.getPrototypeOf(obj2) === obj1;
  console.log(obj2.prop);