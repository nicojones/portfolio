c="\x1B[93m\x1B[1m" # Color - in our case, yellow
n="\x1B[0m" # Normal / neutral
path_here="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

if [[ -z "$1" ]]; then
  echo "Must provide the app name as first argument"
  exit;
fi

appName="$1"

cd $path_here/$appName;

echo -e "${c} * Running script from $path_here$n"



if [[ "$2" ]]; then
  echo -e "${c} * Compiling in CUSTOM mode ($2) $n"
  ng build "$2"
else
  echo -e "${c} * Compiling in PROD mode$n"
  npm run build
fi


distDir="dist"
originDir="$distDir/$appName"
publicDir="public"
destination="$path_here/../$publicDir"

echo -e "${c} * Deleting old files...$n"
rm -rf "$destination/assets"
for file in ${destination}/*.html; do rm "$file" >/dev/null 2>&1;done
for file in ${destination}/*.css; do rm "$file" >/dev/null 2>&1;done
#for file in ${destination}/*.ico; do rm "$file" >/dev/null 2>&1;done
for file in ${destination}/*.js; do rm "$file" >/dev/null 2>&1;done

echo -e "${c} * Moving new files...$n"
cp -r "$originDir/assets" "$destination"
for file in ${originDir}/*.html; do cp "$file" "$destination";done
for file in ${originDir}/*.css; do cp "$file" "$destination";done
for file in ${originDir}/*.ico; do cp "$file" "$destination";done
for file in ${originDir}/*.js; do cp "$file" "$destination";done

echo -e "${c} * Cleaning up...$n"

echo -e "${c} * Moved project from '$originDir' to '$publicDir'"

