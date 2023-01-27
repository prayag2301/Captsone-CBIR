import tensorflow as tf
from keras.applications import VGG16
from keras.applications.vgg16 import preprocess_input
from keras.preprocessing.image import load_img, img_to_array
from keras.models import Model
import numpy as np
import os

# Load the VGG16 model with the last layer removed
base_model = VGG16(weights='imagenet', include_top=False,
                   input_shape=(224, 224, 3))
model = Model(inputs=base_model.input,
              outputs=base_model.get_layer('block5_pool').output)


def retrieve_images(query_image, dataset_path):
    # Load the query image and preprocess it
    query_image = load_img(query_image, target_size=(224, 224))
    query_image = img_to_array(query_image)
    query_image = np.expand_dims(query_image, axis=0)
    query_image = preprocess_input(query_image)

    # Compute the feature vector of the query image
    query_feature_vector = model.predict(query_image)
    query_feature_vector = query_feature_vector.flatten()

    # Initialize a list to store the similarity scores
    similarity_scores = []

    # Iterate through all the images in the dataset
    for i in (os.listdir(dataset_path)):
        # Load the image and preprocess it
        image = load_img(dataset_path + '/' + i, target_size=(224, 224))
        image = img_to_array(image)
        image = np.expand_dims(image, axis=0)
        image = preprocess_input(image)

        # Compute the feature vector of the image
        image_feature_vector = model.predict(image)
        image_feature_vector = image_feature_vector.flatten()

        # Compute the similarity score
        similarity_score = np.dot(query_feature_vector, image_feature_vector) / (
            np.linalg.norm(query_feature_vector) * np.linalg.norm(image_feature_vector))
        # Append the similarity score to the list
        similarity_scores.append((similarity_score, i))

    # Sort the list of similarity scores in descending order
    similarity_scores.sort(key=lambda x: x[0], reverse=True)

    return similarity_scores


print(retrieve_images('/Users/aishaandatt/Downloads/CBIR/chest_xray/test/PNEUMONIA/person1_virus_11.jpeg',
      '/Users/aishaandatt/Downloads/CBIR/chest_xray/val/run'))
