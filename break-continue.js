const nums = [3,5,7,8,9,12,14,56,24,57];
for (let i=0; i < nums.length; i++){
    
    if (nums[i] < 10){
        // break;
        continue;
    }
    console.log(nums[i]);
}