# This file will deal with a lot of the data analysis for this project.

# importing supporting libraries
import numpy as np
import pandas as pd
from datetime import datetime


class Data():

    def __init__(self):
        self.data = pd.read_csv('./data/dresses.csv')

    def drop_na(self):
        # print(self.data.shape)
        return self.data.dropna()
    
    def build_table(self, column_list, df):
        count = 0
        while count < len(df):
            rows = []
            age = int(df.iat[count, 1])
            division_name = df.iat[count, 2]
            department_name = df.iat[count, 3]
            class_name = df.iat[count, 4]
            title = df.iat[count, 6]
            review_text = df.iat[count, 7]
            rating = int(df.iat[count, 9])
            recommend_index = int(df.iat[count, 10])
            rows.append(age)
            rows.append(division_name)
            rows.append(department_name)
            rows.append(class_name)
            rows.append(title)
            rows.append(review_text)
            rows.append(rating)
            rows.append(recommend_index)
            column_list.append(rows)
            count += 1
        return column_list

    def get_initial_table_data(self, post_data):
        data = Data()
        df = data.drop_na()
        df = df[post_data['firstValue']:post_data['lastValue']]
        table_data = []
        columns = ['age', 'division_name', 'department_name', 'class_name',
                   'title', 'review_text', 'rating', 'recommend_index']
        table_data.append(columns)
        return data.build_table(table_data, df)


    def change_singe_column(self, post_data):
        data = Data()
        df = data.drop_na()
        df_sorted_by_column = df[(df[post_data['column']] == post_data['selection'])]
        df_sorted_by_column = df_sorted_by_column[post_data['firstValue']:post_data['lastValue']]
        table_data = []
        columns = ['age', 'division_name', 'department_name', 'class_name',
                   'title', 'review_text', 'rating', 'recommend_index']
        table_data.append(columns)
        return data.build_table(table_data, df_sorted_by_column)


# data = Data()
# data.get_initial_table_data()
