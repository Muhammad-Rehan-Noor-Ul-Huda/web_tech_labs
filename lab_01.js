function addition(a,b)
{
    return a+b;
}
function bitwiseAND(a,b)
{
   return a&b;
}
function bitwiseOR(a,b)
{
    return a|b;
}
function bitwiseXOR(a,b)
{
    return a^b;
}
function addUp(a)
{
    return (a/2)*(1+a);
}
function progressBar(a)
{
    let res="";
    let temp=a;
    for(let i=0;i<10;i++)
    {
        if(temp>9)
        {
            res+="#";
        }
        else
        {
            res+="-";
        }
        temp-=10;
    }
    return res;
}
function minMax(a)
{
    let min=a[0];
    let max=a[0];
    for(let i=0;i<a.length;i++)
    {
        if(a[i]>max)
        {
            max=a[i];
        }
        if(a[i]<min)
        {
            min=a[i];
        }
    }
    return [min,max];
}
function getStars(repo)
{
    return repo.stars;
}
function calculateRepoStats(repos)
{
    let res=repos.map(getStars);
    let sum=0;
    for(let i=0;i<res.length;i++)
    {
        sum+=res[i];
    }
   
    return {
        minStars:Math.min(...res),
        maxStars:Math.max(...res),
        avgStars:Math.floor(sum/res.length),
        variaceScore: Math.abs(Math.min(...res)-Math.max(...res))
    }
}
function calculateFinalPrice(basePrice, taxRate, discountPercentage)
{
   let discountedPrice=Number((basePrice * (1 - discountPercentage / 100)).toFixed(2));
   let tax=discountedPrice*(taxRate/100);
   tax=Number(tax.toFixed(2));
   let finalPrice=Number((discountedPrice+tax).toFixed(2));
   let loyalityPoints=Math.ceil(finalPrice);
   return {loyalityPoints,finalPrice};

}
function paginateData(items, pageNumber, pageSize=5)
{  
    let totalPages=Math.ceil(items.length/pageSize);
    let hasNext=false;
    let hasPrev=false;
    if(pageNumber>totalPages || pageNumber<=0)
    {
        console.log("wrong page")
        return NaN;
    }
    else
    {
        let startIdx=((pageNumber-1)*pageSize);
        let endIdx=startIdx+pageSize;
        if(pageNumber<totalPages)
        {
            hasNext=true;
        }
        if(pageNumber>1)
        {
            hasPrev=true;
        }
        return {
            data:items.slice(startIdx,endIdx),
            currentPage:pageNumber,
            totalPages,
            hasNext,
            hasPrev
        }
         

    }
}

console.log();
console.log("------task 1------");
console.log(addition(5,9));
console.log("------task 2------");
console.log("bitwise And",bitwiseAND(5,9));
console.log("bitwise Or",bitwiseOR(5,9));
console.log("bitwise Xor",bitwiseXOR(5,9));
console.log("------task 3------");
console.log("99: ",addUp(99));
console.log("------task 4------");
console.log(progressBar(40));
console.log("-----task 5--------");
arr=[-76,435,76,34,7,-54,65,23,3]
console.log(minMax(arr))
console.log("-----task 6--------");
const repos = [ { name: 'repo-a', stars: 12 }, { name: 'repo-b', stars: 45 }, { name: 'repo-c', stars: 3 } ];
calculateRepoStats(repos);
console.log("-------task 7-----")
console.log(calculateFinalPrice(1000,10,10));
console.log("------task 8----");
const allProducts = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Desk', 
'Chair', 'Webcam', 'Headphones']; 
const result = paginateData(allProducts, 2, 3);  
console.log(result); 
