/**
 * Update the version number in the pubspec.yaml file.
 *
 * @param {string} workingDir - The working directory where the pubspec.yaml file is located.
 * @param {string} version - The new version number to update in the pubspec.yaml file.
 * @throws {Error} - If the pubspec.yaml file is not found in the specified working directory.
 */
export function updateVersion(workingDir,  version) {
    const pubSpecPath = path.resolve(workingDir, 'pubspec.yaml');

    if (!existsSync(pubSpecPath)) {
        throw Error(`pubspec.yaml not found in ${workingDir}`);
    }

    const pubSpec = readFileSync(pubSpecPath).toString();



    const regex = /^version: [0-9.+-]+(.*)/m;
    const updatedPubSpec = pubSpec.replace(
        regex,
        `version: ${version}$1`
    );

    writeFileSync(pubSpecPath, updatedPubSpec);
}