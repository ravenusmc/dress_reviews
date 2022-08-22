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
        return list(data.columns)
        print(column_names)
        # for col in data.columns:
        #     print(col)
        #     input()

    def distinct_names_per_column(self, column_names):
        exploring = Exploring()
        data = exploring.drop_na()
        for column_name in column_names:
            print(column_name)
            unique_value = list(data[column_name].unique())
            print(unique_value)
            input()
    
    def see_distinct_values(self):
        exploring = Exploring()
        data = exploring.drop_na() 
        new_dataframe = data[data['division_name'] == 'General'] 
        unique_department_names = list(new_dataframe['department_name'].unique())
        print(unique_department_names)
        print('DONE')
        input()
        new_dataframe.to_csv('exploring_data.csv', encoding='utf-8', index=False)
    
    def get_min_max_values_by_column(self):
        exploring = Exploring()
        data = exploring.drop_na() 
        min_value = data['age'].min()
        max_value = data['age'].max()
        print(min_value)
        print(max_value)


test=Exploring()
# column_names = test.get_column_names()
# test.distinct_names_per_column(column_names)
test.get_min_max_values_by_column()


# Unique Values: 
# division_name - general => ['Bottoms', 'Tops', 'Intimate', 'Dresses', 'Jackets', 'Trend']
# division_name - general Petite => ['Bottoms', 'Tops', 'Intimate', 'Dresses', 'Jackets', 'Trend']
# division_name - intimates => ['Bottoms', 'Tops', 'Intimate', 'Dresses', 'Jackets', 'Trend']

# Department Name:
# Bottoms ['General', 'General Petite', 'Initmates'], 
