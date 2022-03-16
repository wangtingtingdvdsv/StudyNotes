
// ---------

// 冒泡
function bubbleSort(arr){
    for(let i = 1;i < arr.length;i++){
        for(let j = i;j > 0;j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            }
        }
    }
    return arr;
}
// 快速

function quickSort(arr){
    if(arr.length <= 1) return arr;
    let right = [],left = [],keys = arr.shift();
    for(let value of arr){
        if(value > keys){
            right.push(value)
        }else{
            left.push(value);
        }
    }
    return quickSort(left).concat(keys,quickSort(right));
}

// 插入排序
function insertSort(arr){
    for(let i = 1;i < arr.length;i++){
        let j = i-1;
        if(arr[i]<arr[j]){
            let temp = arr[i];
            while(j >= 0 && temp < arr[j]){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = temp;
        }
    }
    return arr;
}
// -------
// 希尔排序（缩小增量排序）

function sort(arr){
    //第一趟循环，确定增量
    for(let gap = parseInt(arr.length/2);gap>0;gap = parseInt(gap/2)){
        //第二层循环，找到每个块对应的序列
        // 从gap 开始，因为默认第一个是已经位置正确的元素
        // 这里是i + 1, 而不是i + 增量的原因是，每次只完成每组分组的一部分。
        for(let i=gap;i<arr.length;i++){
            let j=i;
            let empty = arr[j]
            //使用插入排序对对应的序列进行排序
            while(j - gap>=0 && empty <arr[j - gap]){
                arr[j] =arr[j-gap];
                j -= gap;
            }
            arr[j] = empty;

        }
    }
}


// --------
// 选择排序
function selectSort(arr){
    for(let i = 0;i < arr.length;i++){
        let min = Math.min(...arr.slice(i));
        let index = arr.indexOf(min);
        [arr[i],arr[index]] = [arr[index],arr[i]];
    }
    return arr;
}


// ----------------------------------------------------
//堆排序
function swap(arr, i,  j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapify(tree, n, i){
    if (i == n) {
        return;
    }
    let c1 = 2 * i + 1;
    let c2 = 2 * i + 2;
    let max = i;
    if (c1 < n && tree[c1] < tree[max]) {
        max = c1;
    }
    if (c2 < n && tree[c2] < tree[max]) {
        max = c2;
    }
    if (max != i) {
        swap(tree, max, i);
        heapify(tree, n, max);
    }
}

function heap_sort(tree, n) {
    build_heap(tree, n);
    let i;
    for(i = n-1; i >=0; i-- ) {
        swap(tree, i, 0);
        heapify(tree, i, 0);
    }

}

// 构造大根堆
function build_heap(tree, n) {
    let last_node = n - 1;
    let parent = (last_node - 1) / 2;
    let i;
    for(i = parent; i >= 0; i--) {
        heapify(tree, n, i);
    }
}
let arr = [2,5,3,1,10,4];

heap_sort(arr, arr.length);
console.log(arr);

// ----------------
// 归并排序
function MergeSort(arr,left,right){
    if(left >= right) return;
    let mid = Math.floor((right - left) >> 1) + left;
    MergeSort(arr,left,mid);
    MergeSort(arr,mid+1,right);
    Merge(arr,left,mid,right);
    return arr;
}
function Merge(arr,left,mid,right){
    let temp = [],i = 0;
    let p1 = left,p2 = mid + 1;
    while(p1 <= mid && p2 <= right){
        arr[p1] <= arr[p2] ? temp[i++] = arr[p1++] : temp[i++] = arr[p2++];
    }
    while(p1 <= mid){
        temp[i++] = arr[p1++];
    }
    while(p2 <= right){
        temp[i++] = arr[p2++];
    }
    for(let i = 0;i < temp.length;i++){
        arr[i+left] = temp[i];
    }
}



