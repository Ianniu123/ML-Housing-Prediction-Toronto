import matplotlib.pyplot as plt

import numpy as np
import sklearn

def compute_cost(x,y,w,b):

    m = x.shape[0]

    total_cost = 0

    for i in range(m):
        predicted_value = w * x[i] + b
        cost = (predicted_value - y[i]) ** 2
        total_cost += cost
    
    total_cost = total_cost / (2 * m)

    return total_cost


