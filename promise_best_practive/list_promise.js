const listId = new Array(100).fill(0).map((_, i) => i+1);

const promisesFunction = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(id);
    }, 20000 * Math.random());
});

const func = () => {
    let curIndex = 0;
    const indexCheck = {};
    const runningOrder = [];

    const findNexIndex = (index) => {
        if(index > listId.length) {
            return null;
        }
        if (indexCheck[index]) {
            return findNexIndex(index + 1);
        }
        return index;
    }
    const runPromise = (index) => {
        curIndex = index;
        const id = listId[index];
        if(!id) {
            console.log('done', index);
            return;
        }
        console.log('run__', id);
        promisesFunction(id).finally(() => {
            console.log('done_', id);
            runningOrder.push(index);
            if (listId.length === runningOrder.length) {
                console.log(runningOrder.length,'done', runningOrder);
            }
            const nextIndex = findNexIndex(curIndex + 1);
            if (nextIndex) {
                runPromise(nextIndex);
            }
        });

    }
    for (let i = 0; i < 10; i++) {
        runPromise(i);
    }

}

func();