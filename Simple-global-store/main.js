
export default {
 name: "NumberSubmit",
data() {
return {
 numberInput: 0
};
},
 methods: {
addNumber(numberInput) {
 store.addNumber(Number(numberInput));
}
}
};

export default {
 name: "NumberDisplay",
data() {
return {
 storeState: store.state
};
}
};

const store = {
 state: {
 numbers: [1, 2, 3]
},
addNumber(newNumber) {
this.state.numbers.push(newNumber);
}
};