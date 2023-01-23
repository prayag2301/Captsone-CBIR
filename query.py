from extract_cnn_vgg16_keras import VGGNet
import json
import numpy as np
import h5py
import os
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import argparse


ap = argparse.ArgumentParser()
ap.add_argument("-query", required=True,
                help="Path to query which contains image to be queried")
ap.add_argument("-index", required=True,
                help="Path to index")
ap.add_argument("-result", required=True,
                help="Path for output retrieved images")
args = vars(ap.parse_args())


# read in indexed images' feature vectors and corresponding image names
h5f = h5py.File(args["index"], 'r')
# feats = h5f['dataset_1'][:]
feats = h5f['dataset_1'][:]
# print(feats)
imgNames = h5f['dataset_2'][:]
# print(imgNames)
h5f.close()

print("--------------------------------------------------")
print("               searching starts")
print("--------------------------------------------------")

# read and show query image
queryDir = args["query"]
queryImg = mpimg.imread(queryDir)
plt.title("Query Image")
plt.imshow(queryImg)
plt.show()

# init VGGNet16 model
model = VGGNet()

# extract query image's feature, compute simlarity score and sort
queryVec = model.extract_feat(queryDir)
scores = np.dot(queryVec, feats.T)
rank_ID = np.argsort(scores)[::-1]
rank_score = scores[rank_ID]
# print rank_ID
# print rank_score


# number of top retrieved images to show
maxres = 6
imlist = [imgNames[index] for i, index in enumerate(rank_ID[0:maxres])]
imlist2 = [imgNames[index].decode('ASCII')
           for i, index in enumerate(rank_ID[0:maxres])]
path = '/Users/aishaandatt/Downloads/CBIR/Dataset'
imlist3 = []
for i in imlist2:
    # print('i is',type(i))
    # print('path type is ',type(path))
    imlist3.append(path+i)
print(imlist3)
with open('data.json', 'w') as f:
    json.dump({'imag': imlist3}, f)
# print('imgNames \n',imgNames[0][1])
print("top %d images in order are: " % maxres, imlist2)

# show top #maxres retrieved result one by one
for i, im in enumerate(imlist):
    image = mpimg.imread(args["result"]+"/"+str(im, 'utf-8'))
    plt.title("search output %d" % (i+1))
    plt.imshow(image)
    plt.show()
