# This file will deal with a lot of the initial data sets for this project. The file
# will essentially build the initial dataset.

# importing supporting libraries
import numpy as np
import pandas as pd
from datetime import date

class Exploring():

    def __init__(self):
        self.data = pd.read_csv('./data/dresses.csv')

    def see_data_set(self):
        print(self.data)

    def see_data_types(self):
        print(self.data.dtypes)

    def get_dimensions(self):
        print(self.data.info())

    def get_isna(self):
        print(self.data.isna())
    
    def drop_na(self):
        # print(self.data.shape)
        return self.data.dropna()
        # print(data.info())
        # print(data.shape)
    
    def get_column_names(self):
        exploring = Exploring()
        data = exploring.drop_na()
        for col in data.columns:
            print(col)
            input()

    
    # I need to get columns and all distince values within a column. 

test=Exploring()
test.get_column_names()
