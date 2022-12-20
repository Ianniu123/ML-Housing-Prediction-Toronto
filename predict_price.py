import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow.python.keras.layers import Dense
from tensorflow.python.keras.layers import Input
from tensorflow.python.keras.models import Sequential
import numpy as np
import sklearn

model = Sequential(
    [               
        Input(shape=(400,)),
        Dense(units=25, activation="relu", name="dense"),
        Dense(units=15, activation="relu", name="dense_1"),
        Dense(units=1, activation="sigmoid", name = "dense_2")
    ]
)             

model.summary()

model.compile(
    loss=tf.keras.losses.BinaryCrossentropy(),
)
