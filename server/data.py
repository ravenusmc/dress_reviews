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

    def get_distinct_values(self, post_data):
        data = Data()
        df = data.drop_na()
        unique_values_list = []
        column_names_list = ['division_name', 'department_name', 'class_name']
        index_selected_column = column_names_list.index(post_data['column'])
        column_names_list.pop(index_selected_column)
        new_dataframe = df[(df[post_data['column']] == post_data['selection'])]
        for name in column_names_list:
            unique_names = list(new_dataframe[name].unique())
            unique_values_list.append(unique_names)
        column_place_holder = []
        unique_values_list.insert(index_selected_column, column_place_holder)
        return unique_values_list

    def get_initial_table_data(self, post_data):
        data = Data()
        df = data.drop_na()
        dataset_total_length = len(df)
        df = df[post_data['firstValue']:post_data['lastValue']]
        table_data = []
        columns = ['age', 'division_name', 'department_name', 'class_name',
                   'title', 'review_text', 'rating', 'recommend_index']
        table_data.append(columns)
        column_list = data.build_table(table_data, df)
        return column_list, dataset_total_length

    def change_singe_column(self, post_data):
        data = Data()
        df = data.drop_na()
        df_sorted_by_column = df[(
            df[post_data['column']] == post_data['selection'])]
        dataset_total_length = len(df_sorted_by_column)
        df_sorted_by_column = df_sorted_by_column[post_data['firstValue']
            :post_data['lastValue']]
        table_data = []
        columns = ['age', 'division_name', 'department_name', 'class_name',
                   'title', 'review_text', 'rating', 'recommend_index']
        table_data.append(columns)
        column_list = data.build_table(table_data, df_sorted_by_column)
        return column_list, dataset_total_length

    def get_data_based_on_age(self, post_data):
        data = Data()
        df = data.drop_na()
        filtered_data_set = df[(df['division_name'] == post_data['divisionName']) & (
            df['department_name'] == post_data['departmentName']) & (df['class_name'] == post_data['className'])]
        filtered_data_set['age'].astype(int)
        age_data_set = filtered_data_set[(filtered_data_set['age'] >= int(post_data['ageOne'])) & (
            filtered_data_set['age'] <= int(post_data['ageTwo']))]
        incremental_data_set = age_data_set[post_data['firstValue']:post_data['lastValue']]
        dataset_total_length = len(incremental_data_set)
        table_data = []
        columns = ['age', 'division_name', 'department_name', 'class_name',
                   'title', 'review_text', 'rating', 'recommend_index']
        table_data.append(columns)
        column_list = data.build_table(table_data, incremental_data_set)
        return column_list, dataset_total_length

    def get_data_based_off_selection(self, post_data):
        data=Data()
        df=data.drop_na()


# data = Data()
# data.get_initial_table_data()
