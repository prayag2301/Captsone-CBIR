import tensorflow as tf
from keras.layers import Input, Conv2D, MaxPooling2D, Flatten
from keras.models import Model
from tensorflow.keras.utils import load_img, img_to_array
from tensorflow.keras.applications.resnet50 import preprocess_input
import numpy as np
# Define the custom model
input_shape = (224, 224, 3)
inputs = Input(shape=input_shape)
x = Conv2D(32, (3, 3), activation='relu')(inputs)
x = MaxPooling2D((2, 2))(x)
x = Conv2D(64, (3, 3), activation='relu')(x)
x = MaxPooling2D((2, 2))(x)
x = Conv2D(128, (3, 3), activation='relu')(x)
x = MaxPooling2D((2, 2))(x)
x = Conv2D(256, (3, 3), activation='relu')(x)
x = MaxPooling2D((2, 2))(x)
x = Flatten()(x)
model = Model(inputs, x)


def extract_features(img_path):
    img = load_img(img_path, target_size=(224, 224))
    img_array = img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)

    # Extract features using the custom model
    feature_vector = model.predict(img_array)
    return feature_vector


# Example usage
img_path = '/Users/aishaandatt/Downloads/CBIR/chest_xray/val/extra/NORMAL2-IM-1427-0001.jpeg'
feature_vector = extract_features(img_path)
print(feature_vector)
print(len(feature_vector[0]))
