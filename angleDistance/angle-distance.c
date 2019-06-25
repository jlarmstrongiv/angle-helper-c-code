#include <stdio.h>

int main(){
  int a[14]={0,5,30,50,70,90,120,150,180,210,270,305,345,359};
  int b=180,i;
  for(i=0;i<14;i++){
    a[i] = a[i]-b; // minus single degree
    if (a[i]>180)
      a[i]=360-a[i]; // for degree distance
    else if (a[i]<0) // for degree below zero
      a[i]=-a[i]; // absolute degree
    if (i!=13)
      printf("%d, ",a[i]);
    else printf("%d",a[i]);
  }
  return 0;
}
