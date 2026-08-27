#include <iostream>
using namespace std;

int main(){
    cout<<"Rahul Jangra\n";
    int n;
    int arr[] = {1,2,19,3,4,7,6,20,30,11,4,6};
    n = sizeof(arr) / sizeof(arr[0]);

    for(int i=1; i<n; i++){
        int key = arr[i];
        int j = i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1]=key;
    }
    cout<<"Sorted array: ";
    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}