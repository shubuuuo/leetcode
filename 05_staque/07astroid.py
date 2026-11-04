def asteroid_collision(asteroids):
    st = []                                  

    for a in asteroids:
        if a > 0:                              
            st.append(a)
        else:                             
            while st and st[-1] > 0 and st[-1] < abs(a):
                st.pop()

            if st and st[-1] == abs(a):
                st.pop()

            elif not st or st[-1] < 0:
                st.append(a)

    return st                               


print(asteroid_collision([4, 7, 1, 1, 2, -3, -7, 17, 15, -16]))  