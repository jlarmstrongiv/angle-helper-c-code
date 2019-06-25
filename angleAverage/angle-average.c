#include <stdio.h>
#include <math.h>

int main(){
  double a[10]={347,350,352,354,356,0,0,0,0,0};
  double b[10]={270,280,290,300,0,0,0,0,0,0};
  double aver=0,aver_c,aver_s,sum_sin=0,sum_cos=0,mid;

  int i=0,n=4; // average of how many numbers

  for(i=0;i<4;i++){ // average of how many numbers
    mid = b[i]*M_PI/180; // change the degrees to radians
    sum_sin += sin(mid); // sum of sin values of all angles
    sum_cos += cos(mid); // sum of cos values of all angles
  }
  aver_s = sum_sin/n; aver_c = sum_cos/n; // average of sin and cos
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
