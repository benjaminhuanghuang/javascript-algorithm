var isPowerOfFour = function(num) {
  // power of 2 每次将1左移一位，然后低位补0
  // power of 4 将1向左移动两位
  // !!!! 4的次方中的1只出现在奇数的位置上！就是说，上面的二进制从右往左，第1，3，5，……位置上。
  // 如果我们& 一个可以在奇数上面选择位置的数，也就是 0101 0101 ……那么就把不是4次方的排除掉啦
  // power of 2 : num & (num - 1)
  // power of 4 : num = .....010101010, Note: 5 &0x55555555 !=0
  return (num > 0) && ((num & (num - 1)) == 0) && ((num & 0x55555555) != 0);
};