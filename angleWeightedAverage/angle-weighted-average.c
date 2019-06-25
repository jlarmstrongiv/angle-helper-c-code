#include <stdio.h>
#include <math.h>

int main(){
  double a[10]={347,350,352,354,356,0,0,0,0,0};
  double b[10]={340,350,0,10,0,0,0,0,0,0}; // length 4
  double aver=0,aver_c,aver_s,sum_sin=0,sum_cos=0,mid;

  int i=0,n=4; // average of how many numbers

  double weight[10] = {0.004,0.003,0.003,0.99,0,0,0,0,0,0};
  double sum_wei = 0.004 + 0.003 + 0.003 + 0.99;

  for(i=0;i<4;i++){ // average of how many numbers
    mid = b[i]*M_PI/180; // change the degrees to radians
    sum_sin += sin(mid) * weight[i]; // sum of sin values of all angles
    sum_cos += cos(mid) * weight[i]; // sum of cos values of all angles
  }
  aver_s = sum_sin; aver_c = sum_cos; // average of sin and cos
  aver_s = sum_sin/sum_wei; aver_c = sum_cos/sum_wei; // average of sin and cos
  // the code below is to calculate the tan value of the average angles
  if (aver_c < 0)
    aver = atan(aver_s/aver_c)*180/M_PI+180;
  else if (aver_s > 0)
    aver = atan(aver_s/aver_c)*180/M_PI;
  else if (aver_s <= 0)
    aver = atan(aver_s/aver_c)*180/M_PI+360;

  printf("\naverage:%f\n\n", aver);
  return 0;
}
// result 9.796617
