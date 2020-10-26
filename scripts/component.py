#!/usr/bin/env python3

import argparse
import os
from string import Template

# Why spend 5 minutes doing something that you can spend 5 hours failing to automate?
description="This will help create new React components in this project."

# Initiate the parser
parser = argparse.ArgumentParser(description=description)

# Configure args
parser.add_argument("name", nargs='?', default="", help="Create a component with this name. example: App", type=str)
parser.add_argument("-g", "--generic", dest='generic', action='store_const', const=True, default=False, help="Places the new component in the generic subfolder")
args = parser.parse_args()

# Validation
if args.name == '':
    print("\n\033[91mName is required. \033[0m\n")
    parser.print_help()
    exit



# First time dir creation
path = './src/components/generic/' if args.generic else './src/components/'
os.makedirs(path, exist_ok=True)

# Component creation
path = path+args.name

try:
    os.mkdir(path)
except FileExistsError:
    print("\n\033[91mComponent already exists. \033[0m\n")
    parser.print_help()

# writing files
index_file= os.open(path+'/index.js', os.O_CREAT|os.O_RDWR)
index_file_str = f'import {args.name} from \'./{args.name}\';\n\nexport default {args.name};\n'
os.write(index_file, str.encode(index_file_str))
os.close(index_file)

js_file= os.open(path+f'/{args.name}.js', os.O_CREAT|os.O_RDWR)
js_file_str = f'import \'./style.scss\';\n\nfunction {args.name}() {{\n\treturn (\n\t\t<div className=\'{args.name}\'>\n\t\t\t\n\t\t</div>\n\t);\n}}\n\nexport default {args.name};\n'
os.write(js_file, str.encode(js_file_str))
os.close(js_file)

scss_file= os.open(path+'/style.scss', os.O_CREAT|os.O_RDWR)
scss_file_str = f'@import \'common_styles/_variables\'\n\n.{args.name} {{\n\t\n}}\n'
os.write(scss_file, str.encode(scss_file_str))
os.close(scss_file)

test_file= os.open(path+f'/{args.name}.test.js', os.O_CREAT|os.O_RDWR)
test_file_str = f'import {{ render, screen }} from \'@testing-library/react\';\nimport {args.name} from \'./{args.name}\';\n'
os.write(test_file, str.encode(test_file_str))
os.close(test_file)

print(f'\n\033[94m{args.name} component successfully initialized \033[0m\n')

exit

