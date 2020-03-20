#!/usr/bin/python
import argparse
from bson.json_util import dumps
import csv

'''
A script that transforms a CSV table into a BSON tree
Usage: python CSVtoBSON.py [source file] [target file] [root key]
'''


parser = argparse.ArgumentParser(description='Transform a CSV table into a BSON tree')
parser.add_argument('source', help='a CSV file where the first row is for column names')
parser.add_argument('target', help='the name of the resulting BSON file')
parser.add_argument('root_key', default='root', help='what the root will be named in the resulting BSON file (default: "root")')

args = parser.parse_args()

with open(args.source, newline='') as csv_file:
    project_reader = csv.reader(csv_file, delimiter=',')
    
    # Column names
    columns = project_reader.__next__()

    # Register rows
    tree = {args.root_key: [{columns[i]: row[i] for i in range(len(columns))} for row in project_reader]}

with open(args.target, 'w') as f:
    f.write(dumps(tree))