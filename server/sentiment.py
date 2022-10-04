# importing supporting libraries
import numpy as np
import pandas as pd
import json
import datetime
from textblob import TextBlob

# This class will deal with a majority of the data processing that this project will
# handle.


class Sentiment():

    def __init__(self):
        self.data = pd.read_csv('./data/dresses.csv')

    def drop_na(self):
        return self.data.dropna()

    def sentiment_by_rating(self):
        exploring = Sentiment()
        df = exploring.drop_na()
        sentiment_data = []
        columns = ['rating', 'Sentiment']
        sentiment_data.append(columns)
        ratings = [1, 2, 3, 4, 5]
        for rating in ratings:
            rows = []
            df_sorted_by_rating = df[(df['rating'] == rating)]
            average_sentiment_formatted = exploring.get_sentiment(df_sorted_by_rating, exploring)
            rows.append(rating)
            rows.append(average_sentiment_formatted)
            sentiment_data.append(rows)
        print(sentiment_data)

    def get_sentiment(self, df_sorted_by_rating, obj):
        sentiment_by_rating = []
        for text in df_sorted_by_rating['review_text']:
            text_ready_for_analysis = TextBlob(text)
            for sentence in text_ready_for_analysis.sentences:
                sentence_sentiment = sentence.sentiment[0]
                sentiment_by_rating.append(sentence_sentiment)
        average_sentiment = sum(sentiment_by_rating)/len(sentiment_by_rating)
        average_sentiment_formatted = float(format(average_sentiment, '.5f'))
        return average_sentiment_formatted
    
    def get_word_count(self, )
    

test = Sentiment()
test.sentiment_by_rating()
