#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    
        int n;
        cin >> n;

        // int n;
        float less = 0;
        float more = 0;
        // cin>>n;
        if (n == 50)
            cout << 0 << endl;
        if (n == 0)
            cout << 25 << endl;
        if (n < 50)
        {
            

            if (n % 2 == 0)
            {
                // cout<<"run1"<<endl;
                less=50-n;
                cout << (less / 2) << endl;
            }
            else
            {
                cout<<"run2"<<endl;

                less = 50 - n;

                cout << (ceil(less / 2) + 2) << endl;
            }
        }
        else if(n>50)
        {
            // more=n-50;
            // cout<<"run"<<endl;
            // cout<<more<<endl;

            if ((n-50) % 3 == 0)
            {
                cout << ((n-50)/ 3) << endl;
                // cout << "running21" << endl;
            }
            else
            {

                more = n - 50;
                // more=n/3;
                cout<<"more"<<more<<endl;
                cout<<"running22"<<endl;
                cout << (floor(more / 3) + 2) << endl;
            }
        }
    

    // cout<<"ceiling"<<ceil(12.5)<<endl;

    return 0;
}
