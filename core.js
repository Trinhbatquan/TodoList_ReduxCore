export default function html([first,...strings],...values) {
    // console.log(first); //<h1>
    // console.log(strings); //<thẻ còn lại></thẻ>
    // console.log(values); //<valiable:  true, <li>BMW</li>,...>

    return values.reduce((acc, value) => {
        return acc.concat(value,strings.shift())
    },[first])
    .filter(x => x && x !== true || x === 0) //lấy các giá trị truthy và khác true hoặc bằng 0
    .join("");
}



export function createStore(reducer) {
    let state = reducer();
    const roots = new Map();

    function render() {
        for (const [root, component] of roots) {
            const output = component();
            // console.log(component)
            // console.log(output)
            root.innerHTML = output;
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component);
            render();
        },

        connect(selector = (state) => state) {
            return component => (props, ...args) => 
                    component(Object.assign({}, props, selector(state), ...args))
        },

        dispatch(action, ...args) {
            state = reducer(state, action, args); 
            //update state, ham reducer nay chay 2 lan
            render();
        }
    }
}